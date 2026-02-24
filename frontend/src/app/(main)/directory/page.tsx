/**
 * @project AncestorTree
 * @file src/app/(main)/directory/page.tsx
 * @description Contact directory page
 * @version 1.0.0
 * @updated 2026-02-24
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookUser } from 'lucide-react';

export default function DirectoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Danh bạ</h1>
        <p className="text-muted-foreground">Thông tin liên lạc của các thành viên trong dòng họ</p>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <BookUser className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <CardTitle>Danh bạ liên lạc</CardTitle>
              <CardDescription>Tính năng đang được phát triển</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center py-12 text-muted-foreground">
            Danh bạ liên lạc sẽ được cập nhật trong phiên bản tiếp theo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
