/**
 * @project AncestorTree
 * @file src/app/(main)/documents/page.tsx
 * @description Family documents and records page
 * @version 1.0.0
 * @updated 2026-02-24
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function DocumentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Tài liệu</h1>
        <p className="text-muted-foreground">Lưu trữ tài liệu, hình ảnh và gia phả dòng họ</p>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
              <FileText className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <CardTitle>Kho tài liệu</CardTitle>
              <CardDescription>Tính năng đang được phát triển</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center py-12 text-muted-foreground">
            Kho lưu trữ tài liệu sẽ được cập nhật trong phiên bản tiếp theo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
