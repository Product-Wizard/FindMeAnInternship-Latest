
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
  compensation?: boolean,
  compensationRange?: string
) => {
  if (compensation) {
    const trimmedRange = compensationRange?.trim();
    return trimmedRange ? formatNairaRange(trimmedRange) : "Compensation available";
  }

  if (!compensation) {
    return "No compensation";
  }

  return "Compensation not specified";
};

export const hasPaidCompensation = (
  compensation?: boolean,
  pay_range?: string
) => compensation ? Boolean(pay_range?.trim()) : false;
