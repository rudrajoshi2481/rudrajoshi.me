import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import {blogs} from "./BlogIndexes/indexBlogs"
export const DrawerComp = ({ isOpen, onOpen, onClose }: any) => {
    return (
      <>
        <Button variant={"outline"} colorScheme="teal" onClick={onOpen}>
          Articels 📚
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Articles</DrawerHeader>
  
            <DrawerBody>
              <UnorderedList>
                {blogs.map((r) => {
                  return (
                    <ListItem p="1" m="1" listStyleType={"none"} key={r.link}>
                      <Link href={r.link}>
                        <Text onClick={onClose} color="green.500">
                          {r.name}
                        </Text>
                      </Link>
                      <UnorderedList>
                        {r.subPages.map((e) => {
                          return (
                            <ListItem
                              p="1"
                              m="1"
                              onClick={onClose}
                              key={e.link}
                              _hover={{ color: "yellow.500" }}
                            >
                              <Link href={e.link}>{e.name}</Link>
                            </ListItem>
                          );
                        })}
                      </UnorderedList>
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  