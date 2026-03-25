import type { CompensationType } from "@/types/model/Job.model";

const CURRENCY_PATTERN = /(₦|\bNGN\b|naira)/i;

const formatNairaRange = (compensationRange: string) => {
  const trimmedRange = compensationRange.trim();

  if (!trimmedRange) {
    return "Compensation available";
  }

  if (CURRENCY_PATTERN.test(trimmedRange)) {
    return trimmedRange;
  }

  if (trimmedRange.includes("-")) {
    return trimmedRange
      .split("-")
      .map((part) => `₦${part.trim()}`)
      .join(" - ");
  }

  if (/\bto\b/i.test(trimmedRange)) {
    return trimmedRange
      .split(/\bto\b/i)
      .map((part) => `₦${part.trim()}`)
      .join(" to ");
  }

  return `₦${trimmedRange}`;
};

export const formatCompensationLabel = (
  compensationType?: CompensationType,
  compensationRange?: string | null
) => {
  if (compensationType === "paid") {
    const trimmedRange = compensationRange?.trim();
    return trimmedRange ? formatNairaRange(trimmedRange) : "Compensation available";
  }

  if (compensationType === "unpaid") {
    return "No compensation";
  }

  return "Compensation not specified";
};

export const hasPaidCompensation = (
  compensationType?: CompensationType,
  compensationRange?: string | null
) => compensationType === "paid" && Boolean(compensationRange?.trim());
