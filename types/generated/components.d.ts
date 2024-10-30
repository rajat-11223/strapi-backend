import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    description: 'Feature items for Why Choose Us section';
    displayName: 'Feature Item';
    icon: 'list';
  };
  attributes: {
    description: Schema.Attribute.Text;
    order: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.feature': SectionsFeature;
    }
  }
}
