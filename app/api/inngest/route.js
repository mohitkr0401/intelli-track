import { serve } from "inngest/next";

import { inngest } from "@/lib/inngest/client";
import { checkBudgetAlerts, generateMonthlyReports, processRecurringTransaction, triggerRecurringTransactions } from "@/lib/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    // Add your functions here
    checkBudgetAlerts,
    triggerRecurringTransactions, 
    processRecurringTransaction,
    generateMonthlyReports,
  ],
});