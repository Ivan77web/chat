import { Div, Button, FormLayout, FormItem, Input, Checkbox, Avatar } from "@vkontakte/vkui";
import { Popover } from "@vkontakte/vkui/dist/components/Popover/Popover";
import React, { Fragment, useState } from "react";
import { Icon48UserRectangleHorizontalOutline } from '@vkontakte/icons';
import { Logout } from "@/features/logout";
import { useSelector } from "react-redux";
import { getUserAvatar } from "@/entities/User";

export const ProfilePopover = () => {
    const [shown, setShown] = useState(false);
    const avatar = useSelector(getUserAvatar);

    return (
        <Fragment>
            <Popover
                action="click"
                shown={shown}
                onShownChange={setShown}
                content={
                    <FormLayout>
                        <FormItem>
                            <Button
                                size="l"
                                mode="secondary"
                                stretched
                            >
                                Профиль
                            </Button>
                        </FormItem>
                        <FormItem>
                            <Logout />
                        </FormItem>
                    </FormLayout>
                }
            >
                {
                    avatar 
                    ?
                    <Avatar src={avatar}/>
                    :
                    <Icon48UserRectangleHorizontalOutline />
                }
            </Popover>
        </Fragment>
    )
}