'use strict';

/**
 * why-choose-us controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::why-choose-us.why-choose-us', ({ strapi }) => ({
  async find(ctx) {
    const content = await strapi.service('api::why-choose-us.why-choose-us').find(ctx.query);
    return content;
  },
})); 