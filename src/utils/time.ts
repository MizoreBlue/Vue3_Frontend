// 获取当前时间是上午、晚上、早上、下午
export const getTime = () => {
  let message = ''
  const hours = new Date().getHours()
  if (hours <= 9 && hours >= 5) {
    message = '晚上'
  } else if (hours < 12) {
    message = '上午'
  } else if (hours < 18) {
    message = '下午'
  } else if (hours >= 18 && hours <= 24) {
    message = '晚上'
  } else message = '深夜'
  return message
}
