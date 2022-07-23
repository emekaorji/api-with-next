// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fruits from "../../data/fruits.json";

export default function handler(request, response) {
	response.status(200).json(fruits);
}
