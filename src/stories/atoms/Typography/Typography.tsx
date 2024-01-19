import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("font-normal", {
  variants: {
    variant: {
      grayDarkPrimary: "text-gray-dark-primary",
      grayDarkSecondary: "text-gray-dark-secondary",
      grayDarkTertiary: "text-gray-dark-tertiary",
      grayDarkQuartenary: "text-gray-dark-quartenary",
      grayLightSecondary: "text-gray-light-secondary",
      primaryDefault: "text-primary-default",
      primaryLighter: "text-primary-lighter",
      error: "text-error-dark",
      success: "text-success-dark",
      information: "text-information-dark",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      title1: "text-title1",
      title2: "text-title2",
    },
  },
  defaultVariants: {
    variant: "grayDarkPrimary",
    size: "md",
  },
});

export type TypographyProps = VariantProps<typeof textVariants> & {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements["p"];

const Typography = ({
  children,
  element = "p",
  className,
  ...rest
}: TypographyProps) => {
  const Element = element as any;

  return (
    <Element className={`${textVariants(rest)} ${className} `} {...rest}>
      {children}
    </Element>
  );
};

export default Typography;
