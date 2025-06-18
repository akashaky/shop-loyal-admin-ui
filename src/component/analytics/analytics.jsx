import { Page, Layout, Text, Card } from "@shopify/polaris";
import PointsEngagementChart from "./pointEngagementTrend";
import { statsCards, summaryCards } from "./constants";
import { OneThirdCard } from "../common";

export default function Analytics() {
	return (
		<Page title="Overview" fullWidth>
			<Layout>
				{statsCards.map((card, index) => (
					<Layout.Section variant="oneThird" key={index}>
						<OneThirdCard {...card} />
					</Layout.Section>
				))}
			</Layout>
			<Text as="h1" variant="headingLg">
				Points engagement
			</Text>
			<br />
			<Layout>
				<Layout.Section variant="oneThird">
					{summaryCards.map((card, index) => {
						return <OneThirdCard key={index} {...card} />;
					})}
				</Layout.Section>

				<Layout.Section>
					<Card title="Points Engagement (Last 2 Weeks)" sectioned>
						<PointsEngagementChart />
					</Card>
				</Layout.Section>
			</Layout>
		</Page>
	);
}
