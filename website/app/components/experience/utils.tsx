import { CardProps, ImageMetadata } from "../common/Card";

export interface Employer {
  name: string;
  description: string;
  link: string;
}

export function employerToCard(
  employer: Employer,
  image: ImageMetadata,
  callToAction: string
): CardProps {
  return {
    description: employer.description,
    image: image.image,
    altText: image.altText,
    button: {
      text: callToAction,
      href: employer.link,
    },
  };
}
