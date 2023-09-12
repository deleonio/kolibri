import { test, expect, TestInfo } from '@playwright/test';
// @ts-ignore
import { routes } from '@public-ui/sample-react/src/routes-test.ts';

// https://github.com/microsoft/playwright/issues/7575#issuecomment-1288164474
export const configureSnapshotPath =
	(options?: {}) =>
	({}: any, testInfo: TestInfo): any => {
		const originalSnapshotPath = testInfo.snapshotPath;
		testInfo.snapshotPath = (snapshotName) => {
			const result = originalSnapshotPath
				.apply(testInfo, [snapshotName])
				// .replace('-chromium', '')
				// .replace('-firefox', '')
				.replace('-darwin', '')
				.replace('-linux', '')
				.replace('-windows', '');
			return result;
		};
	};

test.beforeEach(configureSnapshotPath());

routes.forEach((route) => {
	test(`snapshot for ${route}`, async ({ page }) => {
		await page.goto(`/#/${route}`, { waitUntil: 'networkidle' });
		await page.waitForSelector(`kol-button[_aria-label="Weiter zum nächsten Komponenten-Beispiel"]`);
		await expect(page).toHaveScreenshot({
			fullPage: true,
		});
	});
});
