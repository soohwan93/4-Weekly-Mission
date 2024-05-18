"use client";
import React from "react";
import { FolderListApiItem, OnModalProps } from "../app/folder/page";
import LinkContainerSkeleton from "./LinkContainerSkeleton";
import FolderLinkContainer from "./FolderLinkContainer";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";

export interface FolderListItemProps extends OnModalProps {
  filterdItem: FolderListApiItem[];
  isPending: boolean;
  setFilterdItem: React.Dispatch<React.SetStateAction<FolderListApiItem[]>>;
}

function FolderListItem({
  onModal,
  filterdItem,
  isPending,
  setFilterdItem,
}: FolderListItemProps) {
  const handleDragEnd = (result: DropResult) => {
    console.log(result);
    console.log(result.destination);
    if (!result.destination) return;
    const items = Array.from(filterdItem);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);
    setFilterdItem(items);
  };

  if (isPending) {
    return (
      <div className="grid grid-cols-link-container gap-5 justify-center w-full">
        {[...Array(3)].map((_, index) => (
          <LinkContainerSkeleton key={`skeleton_${index}`} />
        ))}
      </div>
    );
  }

  return (
    <>
      {filterdItem?.length > 0 ? (
        <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
          <Droppable droppableId="linkCards">
            {(dropProvided) => (
              <div
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
                className="linkCards grid grid-cols-link-container gap-5 w-full"
              >
                {filterdItem.map((item, index) => (
                  <Draggable
                    key={String(item.id)}
                    draggableId={String(item.id)}
                    index={index}
                  >
                    {(dragProvided) => (
                      <div
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        ref={dragProvided.innerRef}
                      >
                        <FolderLinkContainer item={item} onModal={onModal} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <div style={{ paddingBottom: "200px" }}>저장된 링크가 없습니다</div>
      )}
    </>
  );
}

export default FolderListItem;
