import { Page, Layout, Text, Card, BlockStack } from "@shopify/polaris";
export function OneThirdCard({value, title, dateRange}) {
	return (
		<div style={{marginBottom: "20px"}}>
			<Card>
				<BlockStack>
					<Text variant="headingXl" as="h2">
						{value}
					</Text>
					<Text variant="bodyMd" tone="subdued">
						{title}
					</Text>
					<Text variant="bodySm" tone="subdued">
						{dateRange}
					</Text>
				</BlockStack>
			</Card>
		</div>
	);
}
