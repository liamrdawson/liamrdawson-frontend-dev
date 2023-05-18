import styled from 'styled-components'
import { PrimaryButton } from '../../atoms/Button'

interface IItem {
  name: string
  description?: string
}

interface Props {
  items: IItem[]
  clicker: React.MouseEventHandler<HTMLButtonElement>
  activeItem: IItem | undefined
}

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const MenuItemButton = styled(PrimaryButton)<{ isActiveItem: boolean }>`
  text-decoration: ${(props) => (props.isActiveItem ? 'underline' : 'none')};
  flex: 0 0 calc(16.66% - 20px);
  padding: 10px;
  margin: 10px;
`

type GetIsActiveItemProps = {
  activeItem?: IItem
  item: IItem
}

export const MenuItems = ({ items, clicker, activeItem }: Props) => {
  const getIsActiveItem = ({ activeItem, item }: GetIsActiveItemProps) => activeItem && item.name === activeItem.name
  return (
    <ItemsContainer>
      {items.map((item) => (
        <MenuItemButton
          isActiveItem={getIsActiveItem({ activeItem, item }) || false}
          onClick={clicker}
          value={item.name}
          key={items.indexOf(item)}
        />
      ))}
    </ItemsContainer>
  )
}
