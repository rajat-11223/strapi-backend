'use strict';

/**
 * why-choose-us service
 */

const { createCoreService } = require('@strapi/strapi').factories;

// Make sure the service name matches exactly with your API name
module.exports = createCoreService('api::why-choose-us.why-choose-us', ({ strapi }) => ({
  // You can add custom service methods here if needed
  async find(params) {
    return await strapi.entityService.findMany('api::why-choose-us.why-choose-us', params);
  },
  
  async findOne(id, params) {
    return await strapi.entityService.findOne('api::why-choose-us.why-choose-us', id, params);
  },
})); 