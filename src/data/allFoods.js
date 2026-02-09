import monNuoc from "./MonNuoc.json";
import monXao from "./MonXao.json";
import monChien from "./MonChien.json";
import drink from "./Drink.json";
import trangMieng from "./TrangMieng.json";

const allFoods = [
  ...monNuoc.map(i => ({ ...i, category: "Món nước" })),
  ...monXao.map(i => ({ ...i, category: "Món xào" })),
  ...monChien.map(i => ({ ...i, category: "Món chiên" })),
  ...drink.map(i => ({ ...i, category: "Nước uống" })),
  ...trangMieng.map(i => ({ ...i, category: "Tráng miệng" }))
];

export default allFoods;
