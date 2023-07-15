import { showSuccessToast, showFailToast } from 'vant';

export function handleCopy(str: string) {
  try {
    const text = str;
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showSuccessToast('复制成功');
  } catch {
    showFailToast('复制失败，请联系开发者');
  }
}
