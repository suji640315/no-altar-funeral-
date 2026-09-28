import { z } from 'zod';

export const InquirySchema = z.object({
  name: z.string().min(2, '이름을 2자 이상 입력해주세요.'),
  phone: z.string().regex(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, '올바른 전화번호를 입력해주세요.'),
  urgency_status: z.enum(['EMERGENCY_DECEASED', 'PRE_DECEASED_CONSULT']),
  region: z.string().min(2, '장례를 치르실 지역을 입력해주세요.'),
  preferred_parlor: z.string().optional(),
  memo: z.string().optional(),
});

export type InquiryFormValues = z.infer<typeof InquirySchema>;

export const UpdateStatusSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(['RECEIVED', 'CONTACTED', 'DISPATCHED', 'COMPLETED', 'CANCELLED']),
  assigned_director: z.string().optional(),
});

export type UpdateStatusValues = z.infer<typeof UpdateStatusSchema>;
