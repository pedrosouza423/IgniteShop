import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const priceId = 'price_1PPrmOEHgTjxuRxX2vrdSmCB'
    const sucessURL = `${process.env.NEXT_URL}/sucess`
    const cancelURL = `${process.env.NEXT_URL}/`
    
    const checkoutSession = await stripe.checkout.sessions.create({
        cancel_url: cancelURL,
        success_url: sucessURL,
        mode: 'payment',
        line_items: [
            {
                price: priceId, 
                quantity: 1

            }
        ]
    })

    return res.status(201).json({ checkoutURL: checkoutSession.url })
}