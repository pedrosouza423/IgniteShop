import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { priceId } = req.body

    if(req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        return res.status(405).end('Method not allowed')
    }

    if(!priceId) {
        return res.status(400).json({ error: 'Price ID not found'})
    }

    const sucessURL = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
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