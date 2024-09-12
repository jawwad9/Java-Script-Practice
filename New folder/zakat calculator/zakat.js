// User inputs
const assetsInput = document.getElementById("assets");
const liabilitiesInput = document.getElementById("liabilities");
const foodExemptionInput = document.getElementById("foodExemption");
const jewelryExemptionInput = document.getElementById("jewelryExemption");
const resultInput = document.getElementById("result");
const calculateButton = document.getElementById("calculate");

// Calculate zakat percentage
const zakatPercentageThreshold = 200000;
const zakatPercentage = 0.025;

// Initialize calculator
function initializeCalculator() {
	calculateButton.addEventListener("click", calculateZakat);
}

// Calculate zakat and display the result
function calculateZakat() {
	const assets = parseFloat(assetsInput.value);
	const liabilities = parseFloat(liabilitiesInput.value);
	const foodExemption = parseFloat(foodExemptionInput.value);
	const jewelryExemption = parseFloat(jewelryExemptionInput.value);

	const netAssets = Math.max(0, assets - liabilities);
	const zakatAmount = Math.max(0, netAssets *