/**
 * @project AncestorTree
 * @file src/app/(main)/events/page.tsx
 * @description Memorial calendar and events page
 * @version 1.0.0
 * @updated 2026-02-24
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Lịch cúng lễ</h1>
        <p className="text-muted-foreground">Quản lý ngày giỗ, lễ tết và sự kiện dòng họ</p>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
              <Calendar className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <CardTitle>Lịch sự kiện</CardTitle>
              <CardDescription>Tính năng đang được phát triển</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center py-12 text-muted-foreground">
            Lịch cúng lễ và quản lý ngày giỗ sẽ được cập nhật trong phiên bản tiếp theo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
