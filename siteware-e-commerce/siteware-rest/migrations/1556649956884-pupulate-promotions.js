/**
 * Make any changes you need to make to the database here
 */
export async function up() {
  await this('promotions').insert({
    quantidade: 2,
    discount_percent: 0.5,
    label: "Pague 1 e leve 2"
  });
  await this('promotions').insert({
    quantidade: 3,
    discount_fixed: 1000,
    label: "3 por 10"
  });
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down() {
  await this('promotions').remove({
    label: "Pague 1 e leve 2"
  });
  await this('promotions').remove({
    label: "3 por 10"
  });
}
