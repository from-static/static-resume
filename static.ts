import packageJSON from './package.json';
import STATIC_FILE from './static.json';

type Base = {
  _static: {
    generator: {
      name: string;
    }
  },
  data: {
    version: string;
    attributes: Record<string, unknown>;
  }
}
/**
 * The `static` type required by this generator.
 */
export type Static = Base & {
  data: {
    version: string;
    attributes: {
      metadata: {
        title: string;
        description: string;
      },
      contents: {
        person: {
          '@context': string;
          '@type': string;
          givenName: string;
          familyName: string;
          address: {
            '@type': string;
            addressLocality?: string;
            postalCode?: string;
            addressRegion?: string;
            streetAddress?: string;
          },
          email?: string;
          telephone?: string;
        }
        experience: {
          title: string;
          company_name: string;
          location: string;
          industry: string;
        }[];
      }
    };
  }
}
/**
 * The responsible repository for this generator.
 */
export const GENERATOR_REPOSITORY = 'from-static/static-resume';
export const GENERATOR_REF = packageJSON.version;

// export const EXAMPLE: Static = {
//   _static: {
//     generator: {
//       /**
//        * The name of the generator – should be the same as the package name.
//        */
//       name: "@from-static/static-resume"
//     }
//   },
//   data: {
//     version: "1.0.0",
//     attributes: {
//       metadata: {
//         title: "Jane Doe's Resume",
//         description: "Jane Doe's Resume built with @from-static/static-resume"
//       },
//       contents: {
//         person: {
//           '@context': "https://schema.org",
//           '@type': "Person",
//           givenName: "Jane",
//           familyName: "Doe",
//           address: {
//             '@type': "PostalAddress",
//             addressLocality: "New York",
//             postalCode: "10001",
//             addressRegion: "NY",
//             streetAddress: "123 Main St"
//           },
//         },
//         experience: [
//           {
//             title: "Software Engineer",
//             company_name: "@from-static",
//             location: "Chicago, IL",
//             industry: "Technology"
//           },
//         ]
//       }
//     }
//   }
// };

const _STATIC: Static = STATIC_FILE;
export default _STATIC;
