import * as readline from 'readline';

const magicMap: { [index: string]: string } = {
  '3': 'Wiz',
  '5': 'Bak',
  '7': 'Top',
  '0': '*',
};

export function wizbaktop(magicNumber: number): string {
  let returnText = '';

  // Divisible
  for (const divider of Object.keys(magicMap)) {
    if (magicNumber % Number.parseInt(divider) === 0) {
      returnText += magicMap[divider];
    }
  }

  // Contient
  for (const magicDigit of magicNumber.toString()) {
    if (magicMap[magicDigit] !== undefined) {
      returnText += magicMap[magicDigit];
    }
  }

  return returnText.length > 0 ? returnText : magicNumber.toString();
}

function konsole() {
  const rl = readline.createInterface({
    // eslint-disable-next-line no-undef
    input: process.stdin,
    // eslint-disable-next-line no-undef
    output: process.stdout,
  });

  rl.question('Enter you magic number ', (answer) => {
    const input = Number.parseInt(answer ?? '0');
    if (!isNaN(input)) {
      console.log(wizbaktop(input));
    }
    rl.close();
  });
}

konsole();
