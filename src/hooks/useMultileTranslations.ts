
import { useTranslation } from 'react-i18next';

function useMultipleTranslations(keys: string[]) {
  const { t } = useTranslation();
  return keys.map(key => t(key));
}

export default useMultipleTranslations;
