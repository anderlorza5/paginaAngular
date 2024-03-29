using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

public interface IProductoService
{
    public IEnumerable<ProductoDTO> GetAll();

    public ProductoDTO GetByID(int guid);

    public ProductoDTO Add(BaseProductoDTO guid);

    public void Delete(int guid);

    public ProductoDTO Modify(BaseProductoDTO producto, int guid);
}