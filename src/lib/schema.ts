import { z } from 'zod';

export const InquirySchema = z.object({
  region: z.string().min(2, '지역을 선택/입력해주세요.'),
  location_type: z.enum(['HOSPITAL', 'NURSING_HOME', 'HOME', 'OTHER']),
  phone: z.string().regex(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, '올바른 전화번호를 입력해주세요.'),
  memo: z.string().optional(),
});

export type InquiryFormValues = z.infer<typeof InquirySchema>;

export const UpdateStatusSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(['RECEIVED', 'CONTACTED', 'DISPATCHED', 'COMPLETED', 'CANCELLED']),
  assigned_director: z.string().optional(),
});

export type UpdateStatusValues = z.infer<typeof UpdateStatusSchema>;
