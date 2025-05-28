'use client';
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Google Map
const MapFeatureDynamic = dynamic(() => import('@/components/post/MapFeature'), {
  ssr: false,
  loading: () => <p className="text-center p-4">地図を読み込んでいます...</p>,
});

// UI
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Button from '@/components/common/Button';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];
const Maps_API_KEY = process.env.NEXT_PUBLIC_Maps_API_KEY;

const FormSchema = z.object({
  title: z.string().min(1, {
    message: 'タイトルを入力してください',
  }),
  body: z.string().min(1, {
    message: '記事本文を入力してください',
  }),
  imageFile: z
    .any()
    .superRefine((val, ctx) => {
      if (!(val instanceof FileList) || val.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '画像ファイルを添付してください。',
        });
        return;
      }
      const file = val[0];
      if (file.size > MAX_FILE_SIZE) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `画像サイズは2MBまでです。`,
        });
      }
      if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '.jpg、.jpeg、または .png 形式の画像を選択してください。',
        });
      }
    })
    .optional(),
  fullAddress: z.string().optional(),
  prefecture: z.string().optional(),
  city: z.string().optional(),
  addressLine1: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  rate: z
    .number({
      required_error: '評価を設定してください。',
    })
    .min(0, '評価は0以上で設定してください。')
    .max(5, '評価は5以下で設定してください。'),
});

const parseAddressComponents = (
  addressComponents: google.maps.GeocoderAddressComponent[],
  formattedAddress: string | undefined
): { prefecture: string; city: string; addressLine1: string } => {
  let prefecture = '';
  let city = '';
  let addressLine1 = '';
  const detailedParts: string[] = [];

  for (const component of addressComponents) {
    const types = component.types;
    if (types.includes('administrative_area_level_1')) {
      prefecture = component.long_name;
    } else if (types.includes('locality')) {
      city = component.long_name;
    } else if (types.includes('sublocality_level_1') && !city) {
      city = component.long_name;
    } else if (types.includes('sublocality_level_2')) {
      detailedParts.push(component.long_name);
    } else if (types.includes('sublocality_level_3')) {
      detailedParts.push(component.long_name);
    } else if (types.includes('sublocality_level_4')) {
      detailedParts.push(component.long_name);
    } else if (types.includes('route')) {
      detailedParts.push(component.long_name);
    } else if (types.includes('street_number')) {
      detailedParts.push(component.long_name);
    }
  }

  addressLine1 = detailedParts.join('');

  if (!addressLine1 && formattedAddress) {
    let tempAddress = formattedAddress;
    tempAddress = tempAddress.replace(/^〒[0-9\-]+\s*/, '');
    if (prefecture) tempAddress = tempAddress.replace(prefecture, '');
    if (city) tempAddress = tempAddress.replace(city, '');
    addressLine1 = tempAddress.trim().replace(/^[\s,、]+|[\s,、]+$/g, '');
  }

  city = city.trim();

  return { prefecture, city, addressLine1 };
};

const Page = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      body: '',
      imageFile: undefined,
      fullAddress: '',
      prefecture: '',
      city: '',
      addressLine1: '',
      latitude: undefined,
      longitude: undefined,
      rate: 0,
    },
  });

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldOnChange: (value: FileList | undefined) => void
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      fieldOnChange(files);
      setSelectedFileName(files[0].name);
    } else {
      fieldOnChange(undefined);
      setSelectedFileName(null);
    }
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('Form Submitted Data:', data);
  }

  const handlePlaceSelected = (place: google.maps.places.PlaceResult | null) => {
    if (place) {
      if (place.geometry?.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        form.setValue('latitude', lat, { shouldValidate: true });
        form.setValue('longitude', lng, { shouldValidate: true });
      }
      if (place.formatted_address) {
        form.setValue('fullAddress', place.formatted_address, { shouldValidate: true });
      }
      if (place.address_components) {
        const parsed = parseAddressComponents(place.address_components, place.formatted_address);
        form.setValue('prefecture', parsed.prefecture, { shouldValidate: true });
        form.setValue('city', parsed.city, { shouldValidate: true });
        form.setValue('addressLine1', parsed.addressLine1, { shouldValidate: true });
      }
    } else {
      form.setValue('fullAddress', '', { shouldValidate: true });
      form.setValue('prefecture', '', { shouldValidate: true });
      form.setValue('city', '', { shouldValidate: true });
      form.setValue('addressLine1', '', { shouldValidate: true });
      form.setValue('latitude', undefined, { shouldValidate: true });
      form.setValue('longitude', undefined, { shouldValidate: true });
    }
  };

  if (!Maps_API_KEY && process.env.NODE_ENV !== 'test') {
    console.error(
      'Google Maps API Key is not defined. Please set NEXT_PUBLIC_Maps_API_KEY environment variable.'
    );
    return (
      <div className="text-red-500 p-4 text-center">
        Google Maps APIキーが設定されていません。アプリケーションの環境設定を確認してください。
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-2xl lg:text-3xl font-bold mb-6">記事を投稿する</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Input Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>タイトル</FormLabel>
                  <FormControl>
                    <Input placeholder="タイトルを入力してください" className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Body */}
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>記事本文</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none min-h-64 lg:min-h-40" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Attach Image */}
            <FormField
              control={form.control}
              name="imageFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>アイキャッチ画像</FormLabel>
                  <FormControl>
                    <div className="w-full p-4 border-dashed border-gray-300 border-2 rounded-lg text-center">
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        className="hidden"
                        name={field.name}
                        onBlur={field.onBlur}
                        onChange={(e) => handleFileChange(e, field.onChange)}
                        ref={(instance) => {
                          field.ref(instance);
                          if (fileInputRef) {
                            fileInputRef.current = instance;
                          }
                        }}
                      />
                      {!selectedFileName && (
                        <p className="mb-2 text-sm text-gray-500">画像ファイルを添付</p>
                      )}
                      <Button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        variant="secondary"
                        className="mb-2"
                      >
                        ファイルを選択
                      </Button>
                      {selectedFileName && (
                        <p className="mt-1 text-sm text-gray-700">
                          選択中のファイル: {selectedFileName}
                        </p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG, JPEG (最大2MB)</p>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Map */}
            {Maps_API_KEY ? (
              <MapFeatureDynamic apiKey={Maps_API_KEY} onPlaceSelected={handlePlaceSelected} />
            ) : null}
            {/* Rate */}
            <FormField
              control={form.control}
              name="rate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>評価 : {field.value ?? 0}</FormLabel>
                  <FormControl>
                    <Slider
                      value={[field.value ?? 0]}
                      onValueChange={(valueArray) => {
                        field.onChange(valueArray[0]);
                      }}
                      max={5}
                      step={1}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full md:w-[80%] md:block md:m-auto">
              投稿する
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
