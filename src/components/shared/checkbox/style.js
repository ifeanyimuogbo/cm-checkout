import { css } from "styled-components";
import { switchProp } from "styled-tools";
import { getColorFromTheme } from "../../../utils/style-utils";

export const checkAppearance = css`
  &:disabled + span {
    border-color: transparent;
    background-color: ${getColorFromTheme("borderLight")};
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
  }

  &:checked + span::after,
  &:active + span::after {
    ${switchProp(
      "kind",
      {
        indeterminate: css`
          opacity: 1;
          background-color: ${getColorFromTheme("white")};
        `,
      },
      css`
        transform: rotate(40deg) scale(1);
      `
    )}
  }

  &:checked + span,
  &:active + span {
    ${switchProp(
      "kind",
      {
        indeterminate: css`
          background-color: ${getColorFromTheme("green300")};
          border-color: transparent;
        `,
        getStarted: css`
          background-color: ${getColorFromTheme("green300")};
          border-color: transparent;
        `,
      },
      css`
        border-color: transparent;
        background-color: ${getColorFromTheme("blue700")};
      `
    )}
  }

  &:not(:focus):hover + span,
  &:not(:checked):hover + span {
    border-color: ${getColorFromTheme("blue700")};
    background-color: transparent;
  }

  &:hover:focus + span,
  &:hover:checked + span {
    ${switchProp(
      "kind",
      {
        indeterminate: css`
          background-color: transparent;
          border-color: ${getColorFromTheme("blue700")};
        `,
      },
      css`
        border-color: transparent;
        background-color: ${getColorFromTheme("blue700")};
      `
    )}
  }

  &:focus:not(:checked):hover + span {
    border-color: ${getColorFromTheme("blue700")};
    background-color: transparent;
  }

  &:invalid:not(:focus) + span {
    border-color: ${getColorFromTheme("red400")};
    background-color: transparent;
  }

  &:invalid:checked + span,
  &:invalid:active + span {
    border-color: transparent;
    background-color: ${getColorFromTheme("red400")};
  }

  &:disabled:checked + span {
    border-color: transparent;
    background-color: ${getColorFromTheme("borderLight")};
    color: ${getColorFromTheme("borderDark")};

    &::after {
      ${switchProp(
        "kind",
        {
          indeterminate: css`
            background-color: ${getColorFromTheme("borderDark")};
          `,
        },
        css`
          border-color: transparent ${getColorFromTheme("borderDark")}
            ${getColorFromTheme("borderDark")} transparent;
        `
      )}
    }
  }

  ${switchProp("state", {
    error: css`
      + span {
        border-color: ${getColorFromTheme("red400")};
        background-color: transparent;
      }

      &:checked + span::after,
      &:active + span::after {
        ${switchProp("kind", {
          indeterminate: css`
            opacity: 1;
            background-color: white;
          `,
        })}
      }

      &:checked + span,
      &:active + span {
        ${switchProp(
          "kind",
          {
            indeterminate: css`
              background-color: ${getColorFromTheme("red400")};
              border-color: ${getColorFromTheme("red400")};
            `,
            import: css`
              background-color: ${getColorFromTheme("red400")};
              border-color: ${getColorFromTheme("red400")};
            `,
          },
          css`
            border-color: transparent;
            background-color: ${getColorFromTheme("red400")};
          `
        )}
      }

      &:not(:focus):hover + span,
      &:not(:checked):hover + span {
        border-color: ${getColorFromTheme("red400")};
        background-color: transparent;
      }

      &:hover:focus + span,
      &:hover:checked + span {
        ${switchProp(
          "kind",
          {
            indeterminate: css`
              background-color: transparent;
              border-color: ${getColorFromTheme("red400")};
            `,
          },
          css`
            background-color: ${getColorFromTheme("red400")};
            border-color: transparent;
          `
        )}
      }

      &:focus:not(:checked):hover + span {
        border-color: ${getColorFromTheme("red400")};
        background-color: transparent;
      }
    `,
  })}
`;

export const checkIconAppearance = css`
  ${switchProp(
    "kind",
    {
      indeterminate: css`
        width: 8px;
        height: 2px;
        background: #fff;
        border-radius: 2px;
        opacity: 0;
        left: calc(50% - 4px);
        top: calc(50% - 1px);
      `,
    },

    css`
      width: 5px;
      height: 9px;
      border-width: 0 2px 2px 0;
      border-style: solid;
      border-color: transparent #fff #fff transparent;
      transform: rotate(180deg) scale(0);
      top: calc(50% - 6px);
      left: calc(50% - 3px);
    `
  )}
`;
