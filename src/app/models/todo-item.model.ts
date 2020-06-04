export interface EditItemDialogData {
    name: string;
    description: string;
}

export interface TodoItem extends EditItemDialogData{
    id: string;
    createdAt: string;
    editedAt: string;
}
