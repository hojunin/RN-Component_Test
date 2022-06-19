export const fetchData = (page: number) => {
  return fetch(
    `https://getcha-api-v7-prod.getcha.io/v7/community?page_per_count=30&page=${page}&type=11,12,13,26,27,28,29,30,32`,
  )
    .then(res => res.json())
    .catch(err => {
      throw new Error(err);
    });
};
