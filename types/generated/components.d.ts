import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacts';
  info: {
    description: '';
    displayName: 'Contact';
  };
  attributes: {
    email: Schema.Attribute.Email;
    resume: Schema.Attribute.Media<'files'>;
    social: Schema.Attribute.Component<'social.social', true>;
  };
}

export interface SocialSocial extends Struct.ComponentSchema {
  collectionName: 'components_social_socials';
  info: {
    description: '';
    displayName: 'Social';
  };
  attributes: {
    href: Schema.Attribute.String;
    name: Schema.Attribute.Media<'images'>;
  };
}

export interface UiComponentsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_info_cards';
  info: {
    displayName: 'InfoCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiComponentsLinkWithImage extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_link_with_images';
  info: {
    displayName: 'LinkWithImage';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface UiComponentsProjectCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_project_cards';
  info: {
    displayName: 'ProjectCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'ui-components.link-with-image', true>;
    tags: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contact': ContactContact;
      'social.social': SocialSocial;
      'ui-components.info-card': UiComponentsInfoCard;
      'ui-components.link-with-image': UiComponentsLinkWithImage;
      'ui-components.project-card': UiComponentsProjectCard;
    }
  }
}
