'use client';

import { motion } from 'framer-motion';
import MarketingBanner from '@/components/marketing-banner';

export default function MarketingPage() {
  return (
    <div style={{ overflow: 'visible' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <MarketingBanner />
      </motion.div>
    </div>
  );
}
