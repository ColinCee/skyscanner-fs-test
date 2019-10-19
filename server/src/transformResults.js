const isLegDirect = (id, legs) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const leg of legs) {
    if (leg.Id !== id) {
      continue;
    }
    return leg.SegmentIds.length === 1;
  }
  return false;
};
const getLegDataById = (id, legs) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const leg of legs) {
    if (leg.Id !== id) {
      continue;
    }
    return {
      departure: leg.Departure,
      arrival: leg.Arrival,
    };
  }
  return {};
};

const transformResults = (results) => {
  const itineraries = results.Itineraries;
  const legs = results.Legs;
  const output = [];
  let index = 0;

  while (output.length < 15) {
    const itinerary = itineraries[index];
    index += 1;
    const { OutboundLegId, InboundLegId, PricingOptions } = itinerary;

    // Skip non direct journeys since the front end does not support it
    if (!isLegDirect(OutboundLegId, legs) || !isLegDirect(InboundLegId, legs)) {
      continue;
    }

    const outboundLeg = getLegDataById(OutboundLegId, legs);
    const inboundLeg = getLegDataById(InboundLegId, legs);
    const price = PricingOptions[0].Price;

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
