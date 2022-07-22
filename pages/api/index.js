// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fruits from "../../json/fruits.json";

export default function handler(req, res) {
	res.status(200).json(fruits);
}
