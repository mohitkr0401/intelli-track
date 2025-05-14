// import * as React from "react";
// import {
//   Body,
//   Container,
//   Head,
//   Heading,
//   Html,
//   Preview,
//   Section,
//   Text,
// } from "@react-email/components";

// export default function EmailTemplate({
//   userName = "",
//   type = "monthly-report",
//   data = {},
// }) {
//   if (type === "monthly-report") {
//     return (
//       <Html>
//         <Head />
//         <Preview>Your Monthly Financial Report</Preview>
//         <Body style={styles.body}>
//           <Container style={styles.container}>
//             <Heading style={styles.title}>Monthly Financial Report</Heading>

//             <Text style={styles.text}>Hello {userName},</Text>
//             <Text style={styles.text}>
//               Here&rsquo;s your financial summary for {data?.month}:
//             </Text>

//             {/* Main Stats */}
//             <Section style={styles.statsContainer}>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Total Income</Text>
//                 <Text style={styles.heading}>₹{data?.stats.totalIncome}</Text>
//               </div>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Total Expenses</Text>
//                 <Text style={styles.heading}>₹{data?.stats.totalExpenses}</Text>
//               </div>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Net</Text>
//                 <Text style={styles.heading}>
//                   ₹{data?.stats.totalIncome - data?.stats.totalExpenses}
//                 </Text>
//               </div>
//             </Section>

//             {/* Category Breakdown */}
//             {data?.stats?.byCategory && (
//               <Section style={styles.section}>
//                 <Heading style={styles.heading}>Expenses by Category</Heading>
//                 {Object.entries(data?.stats.byCategory).map(
//                   ([category, amount]) => (
//                     <div key={category} style={styles.row}>
//                       <Text style={styles.text}>{category}</Text>
//                       <Text style={styles.text}>₹{amount}</Text>
//                     </div>
//                   )
//                 )}
//               </Section>
//             )}

//             {/* AI Insights */}
//             {data?.insights && (
//               <Section style={styles.section}>
//                 <Heading style={styles.heading}>Intelli-Track Insights</Heading>
//                 {data.insights.map((insight, index) => (
//                   <Text key={index} style={styles.text}>
//                     • {insight}
//                   </Text>
//                 ))}
//               </Section>
//             )}

//             <Text style={styles.footer}>
//               Thank you for using Intelli-Track. Keep tracking your finances for better
//               financial health!
//             </Text>
//           </Container>
//         </Body>
//       </Html>
//     );
//   }
//   if (type === "budget-alert") {
//     return (
//       <Html>
//         <Head />
//         <Preview>Budget Alert</Preview>
//         <Body style={styles.body}>
//           <Container style={styles.container}>
//             <Heading style={styles.title}>Budget Alert</Heading>
//             <Text style={styles.text}>Hello {userName},</Text>
//             <Text style={styles.text}>
//               You&rsquo;ve used {data?.percentageUsed.toFixed(1)}% of your
//               monthly budget.
//             </Text>
//             <Section style={styles.statsContainer}>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Budget Amount</Text>
//                 <Text style={styles.heading}>₹{data?.budgetAmount}</Text>
//               </div>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Spent So Far</Text>
//                 <Text style={styles.heading}>₹{data?.totalExpenses}</Text>
//               </div>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Remaining</Text>
//                 <Text style={styles.heading}>
//                   ₹{data?.budgetAmount - data?.totalExpenses}
//                 </Text>
//               </div>
//             </Section>
//           </Container>
//         </Body>
//       </Html>
//     );
//   }
// }

// const styles = {
//   body: {
//     backgroundColor: "#f6f9fc",
//     fontFamily: "-apple-system, sans-serif",
//   },
//   container: {
//     backgroundColor: "#ffffff",
//     margin: "0 auto",
//     padding: "20px",
//     borderRadius: "5px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   },
//   title: {
//     color: "#1f2937",
//     fontSize: "32px",
//     fontWeight: "bold",
//     textAlign: "center",
//     margin: "0 0 20px",
//   },
//   heading: {
//     color: "#1f2937",
//     fontSize: "20px",
//     fontWeight: "600",
//     margin: "0 0 16px",
//   },
//   text: {
//     color: "#4b5563",
//     fontSize: "16px",
//     margin: "0 0 16px",
//   },
//   section: {
//     marginTop: "32px",
//     padding: "20px",
//     backgroundColor: "#f9fafb",
//     borderRadius: "5px",
//     border: "1px solid #e5e7eb",
//   },
//   statsContainer: {
//     margin: "32px 0",
//     padding: "20px",
//     backgroundColor: "#f9fafb",
//     borderRadius: "5px",
//   },
//   stat: {
//     marginBottom: "16px",
//     padding: "12px",
//     backgroundColor: "#fff",
//     borderRadius: "4px",
//     boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
//   },
//   row: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "12px 0",
//     borderBottom: "1px solid #e5e7eb",
//   },
//   footer: {
//     color: "#6b7280",
//     fontSize: "14px",
//     textAlign: "center",
//     marginTop: "32px",
//     paddingTop: "16px",
//     borderTop: "1px solid #e5e7eb",
//   },
// };

import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function EmailTemplate({
  userName = "",
  type = "budget-alert",
  data = {},
}) {
  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.logo}>📊 Intelli-Track</Heading>
            <Heading style={styles.title}>
              {data?.month} Financial Summary
            </Heading>

            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              Here's your personalized financial summary for{" "}
              <strong>{data?.month}</strong>:
            </Text>

            {/* Key Stats */}
            <Section style={styles.statsContainer}>
              <div style={{ ...styles.stat, borderLeft: "4px solid #10b981" }}>
                <Text style={styles.text}>Total Income</Text>
                <Text style={styles.income}>₹{data?.stats.totalIncome}</Text>
              </div>
              <div style={{ ...styles.stat, borderLeft: "4px solid #ef4444" }}>
                <Text style={styles.text}>Total Expenses</Text>
                <Text style={styles.expense}>₹{data?.stats.totalExpenses}</Text>
              </div>
              <div style={{ ...styles.stat, borderLeft: "4px solid #3b82f6" }}>
                <Text style={styles.text}>Net Savings</Text>
                <Text style={styles.net}>
                  ₹{data?.stats.totalIncome - data?.stats.totalExpenses}
                </Text>
              </div>
            </Section>

            {/* Category Breakdown */}
            {data?.stats?.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Expenses by Category</Heading>
                <div style={styles.categoryGrid}>
                  {Object.entries(data?.stats.byCategory).map(
                    ([category, amount]) => (
                      <div key={category} style={styles.categoryItem}>
                        <Text style={styles.categoryName}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Text>
                        <Text style={styles.categoryAmount}>
                          : ₹{amount.toFixed(2)}
                        </Text>
                      </div>
                    )
                  )}
                </div>
              </Section>
            )}

            {/* AI Insights */}
            {data?.insights && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Intelli-Track Insights</Heading>
                {data.insights.map((insight, index) => (
                  <Text key={index} style={styles.text}>
                    • {insight}
                  </Text>
                ))}
              </Section>
            )}

            <Text style={styles.footer}>
              Thank you for using Intelli-Track. Keep tracking your finances for
              a smarter future.
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  if (type === "budget-alert") {
    return (
      <Html>
        <Head />
        <Preview>Budget Alert</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.logo}>📢 Intelli-Track</Heading>
            <Heading style={styles.title}>Budget Alert</Heading>
            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              You've used <strong>{data?.percentageUsed.toFixed(1)}%</strong> of
              your monthly budget.
            </Text>
            <Section style={styles.statsContainer}>
              <div style={{ ...styles.stat, borderLeft: "4px solid #f59e0b" }}>
                <Text style={styles.text}>Budget Amount</Text>
                <Text style={styles.heading}>₹{data?.budgetAmount}</Text>
              </div>
              <div style={{ ...styles.stat, borderLeft: "4px solid #ef4444" }}>
                <Text style={styles.text}>Spent So Far</Text>
                <Text style={styles.expense}>₹{data?.totalExpenses}</Text>
              </div>
              <div style={{ ...styles.stat, borderLeft: "4px solid #10b981" }}>
                <Text style={styles.text}>Remaining</Text>
                <Text style={styles.income}>
                  ₹{data?.budgetAmount - data?.totalExpenses}
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }
}

const styles = {
  body: {
    backgroundColor: "#f6f9fc",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
    padding: "20px",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.07)",
  },
  logo: {
    textAlign: "center",
    fontSize: "22px",
    color: "#6366f1",
    fontWeight: "700",
    marginBottom: "8px",
  },
  title: {
    color: "#1f2937",
    fontSize: "26px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "0 0 20px",
  },
  heading: {
    color: "#1f2937",
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 16px",
  },
  text: {
    color: "#4b5563",
    fontSize: "16px",
    margin: "0 0 16px",
  },
  section: {
    marginTop: "32px",
    padding: "20px",
    backgroundColor: "#f9fafb",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
  },
  statsContainer: {
    margin: "32px 0",
    padding: "20px",
    backgroundColor: "#f9fafb",
    borderRadius: "6px",
  },
  stat: {
    marginBottom: "20px",
    padding: "14px",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
  },
  income: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#10b981",
    marginTop: "4px",
  },
  expense: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ef4444",
    marginTop: "4px",
  },
  net: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3b82f6",
    marginTop: "4px",
  },
  categoryGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    rowGap: "12px",
    columnGap: "20px",
    marginTop: "12px",
  },
  categoryItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "10px 14px",
    borderRadius: "6px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  },
  categoryName: {
    fontSize: "16px",
    color: "#374151",
    fontWeight: "500",
  },
  categoryAmount: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827",
  },
  footer: {
    color: "#6b7280",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "32px",
    paddingTop: "16px",
    borderTop: "1px solid #e5e7eb",
  },
};

// // ⬇️ Add this at the bottom of the file
// export const defaultProps = {
//   userName: "Mohit",
//   type: "monthly-report",
//   data: {
//     month: "May",
//     stats: {
//       totalIncome: 85000,
//       totalExpenses: 63500,
//       byCategory: {
//         groceries: 12000,
//         transport: 3500,
//         entertainment: 8000,
//       },
//     },
//     insights: [
//       "Groceries spending was 12% higher than April.",
//       "Entertainment expenses were reduced by 25%.",
//     ],
//   },
// };

// EmailTemplate.defaultProps = defaultProps;
