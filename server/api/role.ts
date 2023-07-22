export default defineEventHandler((event) => {
  /**
   * 会員状態(paid: 有料会員, free: 無料会員)
   */
  return { role: 'free' };
});
