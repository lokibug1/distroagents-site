export interface Agent {
  name: string;
  status: "active" | "processing" | "idle";
  metric: string;
  trend: string | null;
}

export interface Activity {
  agent: string;
  action: string;
  detail: string;
  time: string;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
  up: boolean;
}

export const agents: Agent[] = [
  { name: "Collections Agent", status: "active", metric: "12 calls today", trend: "+23%" },
  { name: "Voice Order Agent", status: "processing", metric: "Handling call", trend: null },
  { name: "Margin Protection", status: "active", metric: "3 alerts caught", trend: "-47% errors" },
  { name: "Compliance Monitor", status: "idle", metric: "All clear", trend: null },
];

export const activities: Activity[] = [
  {
    agent: "Collections",
    action: "Sent payment reminder to Reinhart Co.",
    detail: "$12,450 overdue, 47 days",
    time: "2m ago",
  },
  {
    agent: "Voice Order",
    action: "Processed order from US Foods Seattle",
    detail: "24 line items, $8,234",
    time: "5m ago",
  },
  {
    agent: "Margin Protection",
    action: "Blocked below-margin quote",
    detail: "SKU CHK-4521 @ $2.10 (floor: $2.35)",
    time: "8m ago",
  },
  {
    agent: "Voice Order",
    action: "Completed call with Portland Produce",
    detail: "18 line items, catch weight adjusted",
    time: "12m ago",
  },
];

export const metrics: Metric[] = [
  { label: "Orders Processed", value: "147", change: "+12%", up: true },
  { label: "Revenue Recovered", value: "$34.2K", change: "+8%", up: true },
  { label: "Avg Response", value: "2.3min", change: "-18%", up: true },
  { label: "Margin Impact", value: "+2.4%", change: "+0.8%", up: true },
];

export const sparkData = {
  orders: [23, 28, 35, 30, 42, 38, 45, 50, 47, 55, 60, 58],
  revenue: [12, 15, 14, 18, 22, 20, 25, 28, 32, 30, 34, 36],
  response: [4.2, 3.8, 3.5, 3.2, 2.8, 3.0, 2.6, 2.4, 2.5, 2.3, 2.2, 2.3],
};
