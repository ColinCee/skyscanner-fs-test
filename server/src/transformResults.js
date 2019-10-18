const getLegDataById = (id, legs) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const leg of legs) {
    if (leg.Id !== id) {
      continue;
    }
    return {
      departure: leg.Departure,
      arrival: leg.Arrival
    };
  }
};

const transformResults = (results) => {

  const itineraries = results.Itineraries;
  const legs = results.Legs;
  const output = [];

  // for 10 itenaries
  for (let i = 0; i < 10; i += 1) {
    const itinerary = itineraries[i];
    const outboundLeg = getLegDataById(itinerary.OutboundLegId, legs);
    const inboundLeg = getLegDataById(itinerary.InboundLegId, legs);
    const price = itinerary.PricingOptions[0].Price;

    const data = {
      outbound: outboundLeg,
      inbound: inboundLeg,
      price,
    };
    output.push(data);
  }

  return output;
};

module.exports = transformResults;
