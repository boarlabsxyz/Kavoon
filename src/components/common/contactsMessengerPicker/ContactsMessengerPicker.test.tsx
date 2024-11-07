import { Language } from 'src/types/language';
import {
  rendersWithoutCrashingTest,
  opensDropdownOnClickTest,
  closesDropdownOnSelectionTest,
  allowsCustomTextEntryTest,
  closesDropdownOnOutsideClickTest,
} from './testCases';

describe('ContactsMessengerPicker Component', () => {
  const mockOnMessengerChange = jest.fn();
  const language = 'en' as Language;

  beforeEach(() => {
    mockOnMessengerChange.mockClear();
  });

  rendersWithoutCrashingTest(language);
  opensDropdownOnClickTest(language);
  closesDropdownOnSelectionTest(language);
  allowsCustomTextEntryTest(language);
  closesDropdownOnOutsideClickTest(language);
});
