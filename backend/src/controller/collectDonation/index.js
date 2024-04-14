/*

import Stripe from 'stripe';
import sequelize from '../../db/config'; 
import CauseModel from '../../model/cause/index.js';
import DonationModel from '../../model/donation';

const stripe = new Stripe("SECRET_KEY");

const processDonation = async (req, res) => {
    const { amount, currency, source, causeId, userId } = req.body; 
  
    try {
        const chargeAmount = parseInt(amount * 100);
        const charge = await stripe.charges.create({
            amount: chargeAmount,
            currency: currency,
            source: source,
            description: `Donation for cause ID: ${causeId}`,
        });

        const transaction = await sequelize.transaction();

        try {
            const donation = await DonationModel.create({
                donation_amount: amount, 
                CauseId: causeId, 
                UserId: userId, 
            }, { transaction });

            const cause = await CauseModel.findOne({ where: { id: causeId } });
            await cause.update({
                raised_amount: sequelize.literal(`raised_amount + ${amount}`),
            }, { transaction });

            await transaction.commit();

            res.status(200).json({ success: true, charge, donation });
        } catch (error) {

            await transaction.rollback();
            console.log(error)
            throw error; 
        }
    } catch (error) {
        console.error('Stripe charge error:', error);
        res.status(500).json({ success: false, message: 'Failed to process donation' });
    }
};

export default processDonation;

*/