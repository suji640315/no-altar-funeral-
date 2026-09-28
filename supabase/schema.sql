-- 1. Inquiries Table
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    urgency_status VARCHAR(20) NOT NULL CHECK (urgency_status IN ('EMERGENCY_DECEASED', 'PRE_DECEASED_CONSULT')), 
    region VARCHAR(100) NOT NULL,
    preferred_parlor VARCHAR(150),
    estimated_cost INT DEFAULT 0,
    memo TEXT,
    dispatch_status VARCHAR(30) DEFAULT 'RECEIVED' CHECK (dispatch_status IN ('RECEIVED', 'CONTACTED', 'DISPATCHED', 'COMPLETED', 'CANCELLED')),
    assigned_director VARCHAR(50),
    alimtalk_sent BOOLEAN DEFAULT FALSE
);

-- 2. Notification Logs Table
CREATE TABLE notification_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inquiry_id UUID REFERENCES inquiries(id) ON DELETE CASCADE,
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    recipient_phone VARCHAR(20) NOT NULL,
    template_code VARCHAR(50) NOT NULL,
    status VARCHAR(20) NOT NULL, -- 'SUCCESS', 'FAILED', 'FALLBACK_SMS'
    response_payload JSONB
);

-- RLS Policies
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
-- Public can insert (with honeypot & rate limit check on server side)
CREATE POLICY "Allow public insert" ON inquiries FOR INSERT WITH CHECK (true);
-- Authenticated admins can view and update
CREATE POLICY "Allow authenticated read/update" ON inquiries FOR ALL USING (auth.role() = 'authenticated');
