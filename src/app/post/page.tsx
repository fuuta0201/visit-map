'use client';
import React, { useRef, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from '@/components/common/Button';

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

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];

const FormSchema = z.object({
  title: z.string().min(1, {
    message: 'タイトルを入力してください',
  }),
  body: z.string().min(1, {
    message: '記事本文を入力してください',
  }),
  imageFile: z.any().superRefine((val, ctx) => {
    // ファイルが選択されているか (必須チェック)
    if (!(val instanceof FileList) || val.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '画像ファイルを添付してください。',
      });
      return;
    }
    const file = val[0];
    // ファイルサイズチェック
    if (file.size > MAX_FILE_SIZE) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `画像サイズは2MBまでです。`,
      });
    }
    // ファイル形式チェック
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '.jpg、.jpeg、または .png 形式の画像を選択してください。',
      });
    }
  }),
  rate: z
    .number({
      required_error: '評価を設定してください。',
    })
    .min(0, '評価は0以上で設定してください。')
    .max(5, '評価は5以下で設定してください。'),
});

const Page = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      body: '',
      imageFile: undefined,
      rate: 0,
    },
  });

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldOnChange: (value: FileList | undefined) => void
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      fieldOnChange(files); // react-hook-formにFileListを渡す
      setSelectedFileName(files[0].name);
    } else {
      fieldOnChange(undefined); // ファイルが選択解除された場合
      setSelectedFileName(null);
    }
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
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
                      {/* 非表示のファイル入力 */}
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        ref={fileInputRef}
                        onChange={(e) => handleFileChange(e, field.onChange)}
                        className="hidden"
                      />
                      {!selectedFileName && (
                        <p className="mb-2 text-sm text-gray-500">画像ファイルを添付</p>
                      )}
                      <Button
                        type="button"
                        onClick={() => fileInputRef.current?.click()} // 擬似的にinputをクリック
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
            {/* Rate */}
            <FormField
              control={form.control}
              name="rate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>評価 : {field.value}</FormLabel>
                  <FormControl>
                    <Slider
                      value={[field.value]}
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
            <Button type="submit">投稿する</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
