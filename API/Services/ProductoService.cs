using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

public class ProductoService : IProductoService
{

    private readonly SubastaContext _context;
    private readonly IMapper _mapper;

    public ProductoService(SubastaContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }


    public ProductoDTO Add(BaseProductoDTO baseProducto)
    {
        var _mappedProducto = _mapper.Map<ProductoEntity>(baseProducto);
        var entityAdded = _context.productos.Add(_mappedProducto);
        _context.SaveChanges();
        return _mapper.Map<ProductoDTO>(entityAdded);
    }

    public void Delete(int guid)
    {
        ProductoEntity producto = _context.productos.FirstOrDefault(x => x.id == guid);

        if (producto == null)
            throw new ApplicationException($"Peoducto with id {guid} not found");

        _context.productos.Remove(producto);
        _context.SaveChanges();
    }

    public IEnumerable<ProductoDTO> GetAll()
    {
        return _mapper.Map<IEnumerable<ProductoDTO>>(_context.productos.Select(x => x));
    }

    public ProductoDTO GetByID(int guid)
    {
        return _mapper.Map<ProductoDTO>(_context.productos.FirstOrDefault(x => x.id == guid));
    }

     public ProductoDTO Modify(BaseProductoDTO producto, int guid)
    {
        var _mappedProducto = _mapper.Map<ProductoEntity>(producto);
        _mappedProducto.id = guid;

        ProductoEntity modifiedProducto = _context.productos.FirstOrDefault(x => x.id == guid);

        if (modifiedProducto == null)
            return null;

        _context.Entry(modifiedProducto).CurrentValues.SetValues(_mappedProducto);

        _context.SaveChanges();

        return _mapper.Map<ProductoDTO>(_mappedProducto);
    }


}

