import Badge from '@/components/atoms/Badge';
import styled from 'styled-components';

const BadgeIconButtonWrapper = styled.span<{ size: number | string }>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
  height: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: -7px;
  right: -10px;
`;

interface BadgeIconButtonProps {
  icon: React.ReactNode;
  badgeContent?: number;
  badgeBackgroundColor: string;
  size?: number | string;
}

const BadgeIconButton = ({
  icon,
  size = '24px',
  badgeBackgroundColor,
  badgeContent,
}: BadgeIconButtonProps) => {
  return (
    <BadgeIconButtonWrapper size={size}>
      {icon}
      {badgeContent && (
        <BadgeWrapper data-testid="badge-wrapper">
          <Badge
            content={`${badgeContent}`}
            backgroundColor={badgeBackgroundColor}
          />
        </BadgeWrapper>
      )}
    </BadgeIconButtonWrapper>
  );
};

export default BadgeIconButton;
