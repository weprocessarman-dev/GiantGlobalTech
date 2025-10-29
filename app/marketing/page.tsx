'use client';

import { motion } from 'framer-motion';
import MarketingBanner from '@/components/marketing-banner';
import MarketingServicesLine from '@/components/marketing-services-line';

export default function MarketingPage() {
  return (
    <div style={{ overflow: 'visible' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <MarketingBanner />
        <MarketingServicesLine />
      </motion.div>
    </div>
  );
}
