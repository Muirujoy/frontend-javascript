// Branding types to ensure type uniqueness
type MajorCreditsBrand = {
  __brand: 'MajorCredits';
};

type MinorCreditsBrand = {
  __brand: 'MinorCredits';
};

// Interfaces
export interface MajorCredits {
  credits: number;
  brand: MajorCreditsBrand;
}

export interface MinorCredits {
  credits: number;
  brand: MinorCreditsBrand;
}

// Factory functions to create branded credit values
function createMajorCredits(credits: number): MajorCredits {
  return {
    credits,
    brand: { __brand: 'MajorCredits' }
  };
}

function createMinorCredits(credits: number): MinorCredits {
  return {
    credits,
    brand: { __brand: 'MinorCredits' }
  };
}

// Sum functions
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return createMajorCredits(subject1.credits + subject2.credits);
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return createMinorCredits(subject1.credits + subject2.credits);
}

// Test / Example usage (optional)
const major1 = createMajorCredits(3);
const major2 = createMajorCredits(4);
console.log('Sum of major credits:', sumMajorCredits(major1, major2).credits);

const minor1 = createMinorCredits(1);
const minor2 = createMinorCredits(2);
console.log('Sum of minor credits:', sumMinorCredits(minor1, minor2).credits);
