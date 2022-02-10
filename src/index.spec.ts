import { wizbaktop } from './index';

describe('When wizbaktop', () => {
  it('should return 1 when 1', () => {
    expect(wizbaktop(1)).toBe('1');
  });
  it('should return 2 when 2', () => {
    expect(wizbaktop(2)).toBe('2');
  });
  it('should return WizWiz when 3', () => {
    expect(wizbaktop(3)).toBe('WizWiz');
  });
  it('should return BakBak when 5', () => {
    expect(wizbaktop(5)).toBe('BakBak');
  });
  it('should return Wiz when 6', () => {
    expect(wizbaktop(6)).toBe('Wiz');
  });
  it('should return WizBakBak when 15', () => {
    expect(wizbaktop(15)).toBe('WizBakBak');
  });
  it('should return WizWizWiz when 33', () => {
    expect(wizbaktop(33)).toBe('WizWizWiz');
  });
  it('should return BakTopWizBak when 35', () => {
    expect(wizbaktop(35)).toBe('BakTopWizBak');
  });
  it('should return WizTopWizBakTop when 357', () => {
    expect(wizbaktop(357)).toBe('WizTopWizBakTop');
  });
  it('should return Top*Wiz when 703', () => {
    expect(wizbaktop(703)).toBe('Top*Wiz');
  });
  it('should return BakWizTop*Bak when 13705', () => {
    expect(wizbaktop(13705)).toBe('BakWizTop*Bak');
  });
});
